import { MovieDetailResponse } from "../../types";
import { fetchMovieDetail } from "../../utils/api";
import { $ } from "../../utils/selector";
import { MovieDetail } from "../MovieDetail";

class Modal {
  #$target;
  constructor($target: Element) {
    this.#$target = $target;
    this.render();
  }

  render() {
    this.#$target.innerHTML = /*html*/ `<div class="modal-backdrop"></div>
    <div class="modal-container">
    <div class="modal-contents"></div>
      <div class="close-button"></div>
    </div>`;
  }

  async renderMovieDetail(movieId: number) {
    const movieDetail: MovieDetailResponse = await fetchMovieDetail(movieId);
    const movieDetailMarkup = MovieDetail.render(movieDetail);
    $(".modal-contents").innerHTML = movieDetailMarkup;

    MovieDetail.onClickStars();

    this.#$target.classList.remove("hidden");
    this.#$target.classList.add("show");

    this.closeModal();
  }

  closeModal() {
    const hideModal = () => {
      this.#$target.classList.add("hidden");
      this.#$target.classList.remove("show");
    };

    $(".modal-backdrop").addEventListener("click", hideModal);
    $(".close-button").addEventListener("click", hideModal);
    document.addEventListener("keydown", (event) => {
      if (event.code === "Escape") {
        event.preventDefault();
        hideModal();
      }
    });
  }
}

export { Modal };
