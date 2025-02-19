// Function to validate the form and generate the Death Certificate
function generateCertificate() {
    // Retrieve input values from the form
    const deceasedName = document.querySelector('[name="deceased_name"]').value;
    const dateOfDeath = document.querySelector('[name="date_of_death"]').value;
    const gender = document.querySelector('[name="gender"]').value;
    const careOf = document.querySelector('[name="care_of"]:checked')?.value || '';
    const fatherHusbandName = document.querySelector('[name="father_husband_name"]').value;
    const permanentAddress = document.querySelector('[name="address_line"]').value;
    const relation = document.querySelector('[name="relation_with_deceased"]').value;
    const informantName = document.querySelector('[name="informant_name"]').value;

    // Validate if required fields are filled
    if (!deceasedName || !dateOfDeath || !informantName) {
        alert('Please fill in all required fields!');
        return;
    }

    // Certificate content template
    const certificateContent = `
        <div style="border: 5px solid black; padding: 20px; width: 80%; margin: 20px auto; font-family: Arial, sans-serif;">
            <h1 style="text-align: center;">Death Certificate</h1>
            <hr>
            <p><strong>Deceased Name:</strong> ${deceasedName}</p>
            <p><strong>Date of Death:</strong> ${new Date(dateOfDeath).toLocaleDateString()}</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Care of:</strong> ${careOf}</p>
            <p><strong>Father/Husband Name:</strong> ${fatherHusbandName}</p>
            <p><strong>Permanent Address:</strong> ${permanentAddress}</p>
            <p><strong>Relation with Deceased:</strong> ${relation}</p>
            <p><strong>Informant Name:</strong> ${informantName}</p>
            <hr>
            <p style="text-align: center; font-weight: bold;">This certificate is issued as proof of the above details.</p>
        </div>
    `;

    // Insert the certificate into the page for preview
    const certificatePreview = document.createElement('div');
    certificatePreview.id = 'certificate-preview';
    certificatePreview.innerHTML = certificateContent;

    // Append to the body for the user to see
    document.body.appendChild(certificatePreview);
}

// Function to download the certificate as a PDF/print
function downloadCertificate() {
    const certificatePreview = document.getElementById('certificate-preview');
    if (!certificatePreview) {
        alert('Please generate the certificate first!');
        return;
    }

    // Save current page content
    const originalContent = document.body.innerHTML;

    // Replace with certificate content for printing
    document.body.innerHTML = certificatePreview.innerHTML;

    // Trigger print/download
    window.print();

    // Restore original content
    document.body.innerHTML = originalContent;
}

// Attach event listeners to buttons
document.getElementById('generate-certificate').addEventListener('click', generateCertificate);
document.getElementById('download-certificate').addEventListener('click', downloadCertificate);
