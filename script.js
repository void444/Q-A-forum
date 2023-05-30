// JavaScript code to handle the modal functionality
// JavaScript code to handle the modal functionality
document.addEventListener('DOMContentLoaded', function() {
  const answerBtn = document.getElementById('answer-btn');
  const modal = document.getElementById('modal');
  const answerTextarea = document.getElementById('answer-textarea');
  const submitBtn = document.getElementById('submit-btn');
  const cancelBtn = document.getElementById('cancel-btn');

  answerBtn.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  submitBtn.addEventListener('click', function() {
    const answer = answerTextarea.value;
    // Process the answer, e.g., submit it to the server
    closeModal();
  });

  cancelBtn.addEventListener('click', function() {
    closeModal();
  });

  function closeModal() {
    modal.style.display = 'none';
    answerTextarea.value = '';
  }
});

  