
const envelope = document.getElementById("envelope");
const hint = document.getElementById("hint");

function toggleEnvelope() {

  const isOpen = envelope.classList.toggle("open");

  // Update accessibility attributes
  envelope.setAttribute(
    "aria-expanded",
    isOpen
  );

  envelope.setAttribute(
    "aria-label",
    isOpen
      ? "Close birthday letter"
      : "Open birthday letter"
  );

  // Update instruction text
  hint.textContent = isOpen
    ? "CLICK TO CLOSE"
    : "CLICK TO OPEN";

}

// Click or tap to open / close
envelope.addEventListener(
  "click",
  toggleEnvelope
);

// Keyboard support
envelope.addEventListener(
  "keydown",
  function(event) {

    if (
      event.key === "Enter" ||
      event.key === " "
    ) {

      event.preventDefault();

      toggleEnvelope();

    }

  }
);
