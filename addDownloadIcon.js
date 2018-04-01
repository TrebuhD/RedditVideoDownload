const downloadButton = document.createElement("button");
// add attributes
downloadButton.classList.add("control-button", "has-tooltip");
downloadButton.setAttribute("tooltip-string", "Download video");
downloadButton.setAttribute("data-control-type", "click");
// add tooltip
const tooltip = document.createElement("span");
tooltip.classList.add("tooltip");
tooltip.style.left = "-45px";
tooltip.innerText = "Download video";
downloadButton.appendChild(tooltip);
// add icon
const icon = document.createElement("img");
icon.alt = "download";
icon.src =
	"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaGVpZ2h0PSIxOXB4IiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAxNCAxOSIgd2lkdGg9IjE0cHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6c2tldGNoPSJodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2gvbnMiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48dGl0bGUvPjxkZXNjLz48ZGVmcy8+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBpZD0iUGFnZS0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSI+PGcgZmlsbD0iI2ZmZmZmZiIgaWQ9IkNvcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zODMuMDAwMDAwLCAtMjEzLjAwMDAwMCkiPjxnIGlkPSJmaWxlLWRvd25sb2FkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgzODMuMDAwMDAwLCAyMTMuNTAwMDAwKSI+PHBhdGggZD0iTTE0LDYgTDEwLDYgTDEwLDAgTDQsMCBMNCw2IEwwLDYgTDcsMTMgTDE0LDYgTDE0LDYgWiBNMCwxNSBMMCwxNyBMMTQsMTcgTDE0LDE1IEwwLDE1IEwwLDE1IFoiIGlkPSJTaGFwZSIvPjwvZz48L2c+PC9nPjwvc3ZnPg==";
downloadButton.appendChild(icon);
// add click listener
downloadButton.addEventListener("click", e => {
	e.preventDefault();
	fetch(`${window.location}.json`)
		.then(response => response.json())
		.then(json => {
			try {
				console.log(json);
				const videoUrl =
					json[0]["data"]["children"][0]["data"]["secure_media"][
						"reddit_video"
					]["fallback_url"];
				window.location = videoUrl;
			} catch (e) {
				alert("Download failed: " + e);
			}
		});
});
// append to DOM
const fullscreenButton = document.querySelector(".control-button.fullscreen");
fullscreenButton.parentNode.insertBefore(downloadButton, fullscreenButton);
