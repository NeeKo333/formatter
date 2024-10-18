window.addEventListener("DOMContentLoaded", () => {
  const textArea = document.querySelector(".textarea");
  const btn = document.querySelector(".btn");

  if (!textArea || !btn) return;

  btn.addEventListener("click", () => {
    const rawText = textArea.value;

    const array = rawText.split("\n").filter((el) => {
      if (el.includes("-")) return el;
    });

    arrayNew = array.map((el) => {
      return el.split("-")[0].trim();
    });

    textArea.value = arrayNew.join("\n");
  });
});
