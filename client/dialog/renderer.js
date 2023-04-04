const setButton = document.getElementById("btn");
const roomNameInput = document.getElementById("roomName");
setButton.addEventListener("click", () => {
  const roomName = roomNameInput.value;
  setButton.innerHTML = roomName;
  window.electronAPI.setRoomName(roomName);
});
