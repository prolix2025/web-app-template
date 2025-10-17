const form = document.getElementById('main-form');
const input = document.getElementById('user-input');
const help = document.getElementById('form-help');

// Placeholder behavior for now; this is where we'll call the Python API later.
form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const value = input.value.trim();

  if (!value) {
    help.textContent = 'Please enter something to continue.';
    input.focus();
    return;
  }

  help.textContent = 'Submitting…';

  // When backend is ready, switch this to:
  // const res = await fetch('/api/submit', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ value }),
  // });
  // const data = await res.json();

  // For now, simulate success:
  await new Promise(r => setTimeout(r, 600));
  help.textContent = `You entered: "${value}" (API call goes here)`;
  form.reset();
});
