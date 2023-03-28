import logoImage from "../../assets/logo.png";
import { $ } from "../../utils/selector";

class Header {
  #$target;

  constructor(
    $target: Element,
    onSubmitSearchKeyword: (searchKeyword: string) => void,
    onClickLogoImage: () => void
  ) {
    this.#$target = $target;
    this.render();

    const $searchBox = $(".search-box");

    $searchBox.addEventListener("submit", (event: Event) => {
      event.preventDefault();

      const $searchInput = $(".search-input");
      if ($searchInput instanceof HTMLInputElement) {
        const inputValue = $searchInput.value;

        if (inputValue === "") {
          alert("검색값을 입력해주세요.");
          return;
        }

        onSubmitSearchKeyword(inputValue);
      }

      if (event.target instanceof HTMLFormElement) event.target.reset();
    });

    $(".logo").addEventListener("click", onClickLogoImage);
  }

  render() {
    this.#$target.innerHTML = /*html*/ `
        <h1 class="logo"><img src="${logoImage}" alt="MovieList 로고" /></h1>
        <form class="search-box">
            <input class="search-input" type="text" placeholder="검색" />
            <button type="submit" class="search-button">검색</button>
        </form>
    `;
  }
}

export { Header };