function showPopup(contentId) {
    var content = getContentById(contentId);
    if (content) {
      document.getElementById('popup-content').innerHTML = content;
      document.getElementById('popup').style.display = 'block';
    }
  }
  
  function getContentById(contentId) {
    switch (contentId) {
      case 'care':
        return 'This is information about Care at MCH clinic.';
      case 'health':
        return 'This is information about Health Library.';
      case 'professionals':
        return 'This is information for Medical Professionals.';
      case 'research':
        return 'This is information about Research & Education at MCH Clinic.';
      case 'certification':
        return 'This is information about Get Medical Certification.';
      case 'appointment':
        return 'This is information about Requesting an appointment.';
      default:
        return null;
    }
  }
  
  function hidePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  