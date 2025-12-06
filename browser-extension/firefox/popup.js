document.getElementById("searchBtn").addEventListener("click", function () {
  let code = document.getElementById("codeInput").value.trim();

  if (!code || isNaN(code)) {
    alert("Enter a valid area code.");
    return;
  }

  let url = `https://allareacodes.cloud/area-code/${code}`;
  window.open(url, "_blank");
});
