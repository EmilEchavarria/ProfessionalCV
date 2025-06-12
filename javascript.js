// Esperar 2.5 segundos y luego ocultar intro
setTimeout(() => {
  const intro = document.getElementById("intro");

  if (intro) {
    // Transición de desvanecimiento
    intro.classList.add("opacity-0");

    // Después del fade out, ocultar el intro y mostrar el contenido
    setTimeout(() => {
      intro.classList.add("hidden");
    }, 1000); // Tiempo igual al duration-1000
  }
}, 1500); // Tiempo visible del intro


// ELEMENTOS DINAMICOS

// ELEMENTOS DINÁMICOS

document.addEventListener("DOMContentLoaded", () => {
  const newSkillButton = document.getElementById("BtnAddSkill");

  if (newSkillButton) {
    newSkillButton.addEventListener("click", () => {
      const skillsContainer = document.getElementById("skillsContainer");

      if (skillsContainer) {
        const newEntry = document.createElement("div");
        newEntry.className = "software-entry";

        const input = document.createElement("input");
        input.type = "text";
        input.name = "skills[]";  // <- Cambiado de "software[]" a "skills[]"
        input.placeholder = "Nombre de su habilidad";
        input.required = true;
        input.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-2";

        const select = document.createElement("select");
        select.name = "skillsLevel[]";  // <- Cambiado de "softwareLevel[]" a "skillsLevel[]"
        select.className = "mb-2 mt-2";

        const options = [
          { value: "", text: "Puntuación" },
          { value: "1", text: "1" },
          { value: "2", text: "2" },
          { value: "3", text: "3" },
          { value: "4", text: "4" },
          { value: "5", text: "5" },
        ];

        for (const optData of options) {
          const option = document.createElement("option");
          option.value = optData.value;
          option.textContent = optData.text;
          select.appendChild(option);
        }

        newEntry.appendChild(input);
        newEntry.appendChild(select);

        skillsContainer.appendChild(newEntry);
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const NewSoftwareButton = document.getElementById("BtnAddSoftware");

  NewSoftwareButton.addEventListener("click", () => {
    const softwareContainer = document.getElementById("softwareContainer");

    const newEntry = document.createElement("div");
    newEntry.className = "software-entry";

    const input = document.createElement("input");
    input.type = "text";
    input.name = "software[]";
    input.placeholder = "Nombre del software";
    input.required = true;
    input.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-2";

    const select = document.createElement("select");
    select.name = "softwareLevel[]";
    select.className = "mb-2 mt-2";

    const options = [
      { value: "", text: "Puntuación" },
      { value: "1", text: "1" },
      { value: "2", text: "2" },
      { value: "3", text: "3" },
      { value: "4", text: "4" },
      { value: "5", text: "5" }
    ];

    options.forEach(optData => {
      const option = document.createElement("option");
      option.value = optData.value;
      option.textContent = optData.text;
      select.appendChild(option);
    });

    newEntry.appendChild(input);
    newEntry.appendChild(select);
    softwareContainer.appendChild(newEntry);
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const newLanguageButton = document.getElementById("BtnAddLanguage");

  if (newLanguageButton) {
    newLanguageButton.addEventListener("click", () => {
      const languagesContainer = document.getElementById("languageContainer");

      if (languagesContainer) {
        const newEntry = document.createElement("div");
        newEntry.className = "language-entry";

        const input = document.createElement("input");
        input.type = "text";
        input.name = "language[]";
        input.placeholder = "Nombre del idioma";
        input.required = true;
        input.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-2";

        const select = document.createElement("select");
        select.name = "languageLevel[]";
        select.className = "mb-2 mt-2";

        const options = [
          { value: "", text: "Puntuación" },
          { value: "1", text: "1" },
          { value: "2", text: "2" },
          { value: "3", text: "3" },
          { value: "4", text: "4" },
          { value: "5", text: "5" }
        ];

        options.forEach(optData => {
          const option = document.createElement("option");
          option.value = optData.value;
          option.textContent = optData.text;
          select.appendChild(option);
        });

        newEntry.appendChild(input);
        newEntry.appendChild(select);
        languagesContainer.appendChild(newEntry);
      }
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {

 const newExperienceButton = document.getElementById("BtnAddExperience");
    newExperienceButton.addEventListener("click", () => {

    const experienceContainer = document.getElementById("experienceContainer");

    const newTextarea = document.createElement("textarea");
    newTextarea.name = "experience[]";
    newTextarea.placeholder = "Describa su experiencia";
    newTextarea.required = true;
    

    experienceContainer.appendChild(newTextarea);
 });
});




document.addEventListener("DOMContentLoaded", () => {
  const newworkExperienceButton = document.getElementById("BtnAddWorkExperience");

  newworkExperienceButton.addEventListener("click", () => {
    const workExperienceContainer = document.getElementById("workExperience");

    // Crear contenedor para la experiencia laboral
    const workEntry = document.createElement("div");
    workEntry.className = "mb-4";

    // Nombre de la empresa
    const labelName = document.createElement("label");
    labelName.textContent = "Nombre de la empresa:";
    labelName.style.color = "red";
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "company[]";
    inputName.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";
    inputName.placeholder = "Nombre de la empresa"; 

    // Fecha de inicio
    const labelDate = document.createElement("label");
    labelDate.textContent = "Fecha de inicio:";
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.name = "startDate[]";
    inputDate.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";

    // Fecha de fin
    const labelEndDate = document.createElement("label");
    labelEndDate.textContent = "Fecha de fin:";
    const inputEndDate = document.createElement("input");
    inputEndDate.type = "date";
    inputEndDate.name = "endDate[]";
    inputEndDate.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";

    // Agregar elementos al contenedor
    workEntry.appendChild(labelName);
    workEntry.appendChild(inputName);
    workEntry.appendChild(labelDate);
    workEntry.appendChild(inputDate);
    workEntry.appendChild(labelEndDate);
    workEntry.appendChild(inputEndDate);

    // Agregar entrada al contenedor principal
    workExperienceContainer.appendChild(workEntry);
  });
});




document.addEventListener("DOMContentLoaded", () => {
  const newworkExperienceButton = document.getElementById("BtnAddWorkExperience");

  newworkExperienceButton.addEventListener("click", () => {
    const workExperienceContainer = document.getElementById("workExperience");

    // Crear contenedor para la experiencia laboral
    const workEntry = document.createElement("div");
    workEntry.className = "mb-4";

    // Nombre de la empresa
    const labelName = document.createElement("label");
    labelName.textContent = "Nombre de la empresa:";
    labelName.style.color = "red";
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "company[]";
    inputName.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";
    inputName.placeholder = "Nombre de la empresa"; 

    // Fecha de inicio
    const labelDate = document.createElement("label");
    labelDate.textContent = "Fecha de inicio:";
    const inputDate = document.createElement("input");
    inputDate.type = "date";
    inputDate.name = "startDate[]";
    inputDate.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";

    // Fecha de fin
    const labelEndDate = document.createElement("label");
    labelEndDate.textContent = "Fecha de fin:";
    const inputEndDate = document.createElement("input");
    inputEndDate.type = "date";
    inputEndDate.name = "endDate[]";
    inputEndDate.className = "w-full p-2 border border-gray-300 rounded mb-2 mt-1";

    // Agregar elementos al contenedor
    workEntry.appendChild(labelName);
    workEntry.appendChild(inputName);
    workEntry.appendChild(labelDate);
    workEntry.appendChild(inputDate);
    workEntry.appendChild(labelEndDate);
    workEntry.appendChild(inputEndDate);

    // Agregar entrada al contenedor principal
    workExperienceContainer.appendChild(workEntry);
  });
});






document.addEventListener("DOMContentLoaded", () => {
  // Para Educación
  const btnAddEducation = document.getElementById("BtnAddEducation");
  const educationContainer = document.getElementById("educationContainer");

  btnAddEducation.addEventListener("click", () => {
    // Crear nuevos elementos para agregar
    const labelName = document.createElement("label");
    labelName.textContent = "Nombre de la carrera:";
    labelName.className = "mt-2";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "education-name[]"; // usar array para varios valores
    inputName.placeholder = "Nombre de su carrera";
    inputName.required = true;
    inputName.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    const labelStart = document.createElement("label");
    labelStart.textContent = "Fecha de inicio:";
    labelStart.className = "mt-2";

    const inputStart = document.createElement("input");
    inputStart.type = "date";
    inputStart.name = "education-start[]";
    inputStart.required = true;
    inputStart.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    const labelEnd = document.createElement("label");
    labelEnd.textContent = "Fecha de finalización:";
    labelEnd.className = "mt-2";

    const inputEnd = document.createElement("input");
    inputEnd.type = "date";
    inputEnd.name = "education-end[]";
    inputEnd.required = true;
    inputEnd.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    // Agregar al contenedor
    educationContainer.appendChild(labelName);
    educationContainer.appendChild(inputName);
    educationContainer.appendChild(labelStart);
    educationContainer.appendChild(inputStart);
    educationContainer.appendChild(labelEnd);
    educationContainer.appendChild(inputEnd);
  });

  // Para Certificaciones
  const btnAddCertification = document.getElementById("BtnAddCertification");
  const certificationContainer = document.getElementById("certificationContainer");

  btnAddCertification.addEventListener("click", () => {
    const labelName = document.createElement("label");
    labelName.textContent = "Nombre de la certificación:";
    labelName.className = "mt-2";

    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.name = "certification-name[]";
    inputName.placeholder = "Nombre de su certificación";
    inputName.required = true;
    inputName.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    const labelStart = document.createElement("label");
    labelStart.textContent = "Fecha de inicio:";
    labelStart.className = "mt-2";

    const inputStart = document.createElement("input");
    inputStart.type = "date";
    inputStart.name = "certification-start[]";
    inputStart.required = true;
    inputStart.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    const labelEnd = document.createElement("label");
    labelEnd.textContent = "Fecha de finalización:";
    labelEnd.className = "mt-2";

    const inputEnd = document.createElement("input");
    inputEnd.type = "date";
    inputEnd.name = "certification-end[]";
    inputEnd.required = true;
    inputEnd.className = "mt-2 p-2 border border-gray-300 rounded w-full";

    certificationContainer.appendChild(labelName);
    certificationContainer.appendChild(inputName);
    certificationContainer.appendChild(labelStart);
    certificationContainer.appendChild(inputStart);
    certificationContainer.appendChild(labelEnd);
    certificationContainer.appendChild(inputEnd);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const fileInput = document.getElementById("profileImage");
    const imageOutput = document.getElementById("imageOutput");

    // Limpiar cualquier imagen previa
    while (imageOutput.firstChild) {
      imageOutput.removeChild(imageOutput.firstChild);
    }

    if (fileInput.files && fileInput.files[0]) {
      const imageURL = URL.createObjectURL(fileInput.files[0]);

      const img = document.createElement("img");
      img.src = imageURL;
      img.alt = "Imagen de perfil";
      img.className = "rounded-circle shadow";
      img.style.width = "350px";
      img.style.height = "350px";
      img.style.objectFit = "cover";
      img.style.borderRadius = "3%";

      imageOutput.appendChild(img);
    }
  });
});




// Generar NOMBRE
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const nombre = document.getElementById("name").value;
    document.getElementById("nameOutput").textContent = `${nombre}`;
  });
});

// Generar TÍTULO
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const title = document.getElementById("title").value;
    document.getElementById("titleOutput").textContent = `${title}`;
  });
});


// Generar Email
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const email = document.getElementById("email").value;
    const emailSpan = document.getElementById("emailSpan");

    // Limpiar contenido anterior
    while (emailSpan.firstChild) {
      emailSpan.removeChild(emailSpan.firstChild);
    }

    if (email.trim() !== "") {
      const emailLink = document.createElement("a");
      emailLink.href = `mailto:${email}`;
      emailLink.textContent = email;
      emailLink.className = "text-blue-600 underline";
      emailSpan.appendChild(emailLink);
    }
  });
});


// Generar Teléfono
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const phone = document.getElementById("phone").value;
    const phoneSpan = document.getElementById("phoneSpan");

    // Limpiar contenido anterior
    while (phoneSpan.firstChild) {
      phoneSpan.removeChild(phoneSpan.firstChild);
    }

    if (phone.trim() !== "") {
      const phoneLink = document.createElement("a");
      phoneLink.href = `tel:${phone}`;
      phoneLink.textContent = phone;
      phoneLink.className = "text-blue-600 underline text-[1.3rem]";
      phoneSpan.appendChild(phoneLink);
    }
  });
});


// fecha de nacimiento
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const birthDate = document.getElementById("birthDate").value;
    const birthDateSpan = document.getElementById("birthDateSpan");

    if (birthDate.trim() !== "") {
      birthDateSpan.textContent = birthDate;
    } else {
      birthDateSpan.textContent = "";
    }
  });
});


// Generar LinkedIn
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const linkedin = document.getElementById("linkedin").value;
    const linkedinSpan = document.getElementById("linkedinSpan");

    // Limpiar contenido anterior
    while (linkedinSpan.firstChild) {
      linkedinSpan.removeChild(linkedinSpan.firstChild);
    }

    if (linkedin.trim() !== "") {
      const linkedinLink = document.createElement("a");
      linkedinLink.href = linkedin;
      linkedinLink.target = "_blank";
      linkedinLink.textContent = linkedin;
      linkedinLink.className = "text-blue-600 underline text-[1.3rem]";
      linkedinSpan.appendChild(linkedinLink);
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const skills = document.querySelectorAll('input[name="skills[]"]');
    const skillsOutput = document.getElementById("skillsOutput");

    while (skillsOutput.firstChild) {
      skillsOutput.removeChild(skillsOutput.firstChild);
    }

    skills.forEach(skill => {
      const parent = skill.parentElement;
      const skillLevelSelect = parent.querySelector('select[name="skillsLevel[]"]');

      if (skill.value.trim() !== "") {
        const skillLevel = skillLevelSelect ? skillLevelSelect.value : "0";
        const skillText = `${skill.value} (${skillLevel}/5)`;

        const skillItem = document.createElement("li");
        skillItem.className = "list-group-item px-0 text-[1.3rem] text-white";
        skillItem.textContent = skillText;

        skillsOutput.appendChild(skillItem);
      }
    });
  });
});


document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const software = document.querySelectorAll('input[name="software[]"]');
    const softwareOutput = document.getElementById("softwareOutput");

    while (softwareOutput.firstChild) {
      softwareOutput.removeChild(softwareOutput.firstChild);
    }

    software.forEach(soft => {
      if (soft.value.trim() !== "") {
        const softLevel = soft.nextElementSibling.value || "0";
        const softText = `${soft.value} (${softLevel}/5)`;

        const softItem = document.createElement("li");
        softItem.className = "list-group-item px-0 text-[1.3rem] text-white"; // corregido
        softItem.textContent = softText;

        softwareOutput.appendChild(softItem);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const languages = document.querySelectorAll('input[name="language[]"]');
    const languagesOutput = document.getElementById("languagesOutput");

    while (languagesOutput.firstChild) {
      languagesOutput.removeChild(languagesOutput.firstChild);
    }

    languages.forEach(lang => {
      if (lang.value.trim() !== "") {
        const langLevel = lang.nextElementSibling.value || "0";
        const langText = `${lang.value} (${langLevel}/5)`;

        const langItem = document.createElement("li");
        langItem.className = "list-group-item px-0 text-[1.3rem] text-white";  // corregido
        langItem.textContent = langText;

        languagesOutput.appendChild(langItem);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const experiences = document.querySelectorAll('textarea[name="experience[]"]');
    const experienceList = document.getElementById("experienceList");

    while (experienceList.firstChild) {
      experienceList.removeChild(experienceList.firstChild);
    }

    experiences.forEach(exp => {
      if (exp.value.trim() !== "") {
        const p = document.createElement("p");
        p.className = "mb-2 text-[1.3rem]";
        p.textContent = exp.value;
        experienceList.appendChild(p);
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const companies = document.querySelectorAll('input[name="company[]"]');
    const startDates = document.querySelectorAll('input[name="startDate[]"]');
    const endDates = document.querySelectorAll('input[name="endDate[]"]');
    const outputContainer = document.getElementById("workExperienceOutput");

    while (outputContainer.firstChild) {
      outputContainer.removeChild(outputContainer.firstChild);
    }

    for (let i = 0; i < companies.length; i++) {
      const company = companies[i].value.trim();
      const start = startDates[i].value;
      const end = endDates[i].value;

      if (company !== "" && start !== "" && end !== "") {
        const p = document.createElement("p");
        p.className = "mb-2 text-[1.3rem]";
        p.style.wordBreak = "break-word";
        p.textContent = ` ${company} (Desde: ${start} hasta: ${end})`;
        outputContainer.appendChild(p);
      }
    }
  });
});


// generar educación
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const careers = document.querySelectorAll('input[name="education-name"]');
    const startDates = document.querySelectorAll('input[name="education-start"]');
    const endDates = document.querySelectorAll('input[name="education-end"]');
    const output = document.getElementById("educationOutput");

    output.HTML = ""; // Limpiar antes de mostrar resultados

    for (let i = 0; i < careers.length; i++) {
      const career = careers[i].value.trim();
      const start = startDates[i].value;
      const end = endDates[i].value;

      if (career !== "" && start !== "" && end !== "") {
        const p = document.createElement("p");
        p.className = "mb-2 text-[1.3rem]"; // Estilo Bootstrap opcional
        p.textContent = ` ${career} (Desde: ${start} hasta: ${end})`;
        output.appendChild(p);
      }
    }
  });
});







document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("BtnCvGenerate").addEventListener("click", () => {
    const names = document.querySelectorAll('input[name="certification-name"]');
    const starts = document.querySelectorAll('input[name="certification-start"]');
    const ends = document.querySelectorAll('input[name="certification-end"]');
    const output = document.getElementById("certificationOutput");

    output.HTML = ""; // Limpiar contenido previo

    for (let i = 0; i < names.length; i++) {
      const name = names[i].value.trim();
      const start = starts[i].value;
      const end = ends[i].value;

      if (name !== "" && start !== "" && end !== "") {
        const p = document.createElement("p");
        p.className = "mb-2 text-[1.3rem]"; // Estilo Bootstrap opcional
        p.textContent = ` ${name} (Desde: ${start} hasta: ${end})`;
        output.appendChild(p);
      }
    }
  });
});

/* Validación del formulario antes de generar el CV

document.getElementById("BtnCvGenerate").addEventListener("click", function () {
  const inputs = document.querySelectorAll('input[required], select[required], textarea[required]');
  let formIsValid = true;

  inputs.forEach(input => {
    if (!input.checkValidity()) {
      input.reportValidity(); // muestra el mensaje de error del navegador
      formIsValid = false;
      return; // se detiene en el primer campo inválido
    }
  });

  if (formIsValid) {
    // Generar el CV aquí
  }
});
*/