function clickHandler()
        {

          //dark mode and light mode
          let main = document.getElementById('body');
          let nav = document.getElementById('nav-changes');
          main.classList.toggle("body-change");
          nav.classList.toggle("nav-change");


          let homeElement=document.getElementById("homeToggle_theme");
          let aboutElement=document.getElementById("aboutToggle_theme");
          let aboutToggleIcon = document.getElementById('aboutToggleIcon');
          let serviceToggle_theme = document.getElementById('serviceToggle_theme');
          let serviceToggleIcon = document.getElementById('serviceToggleIcon');
          let patientToggle_theme = document.getElementById('patientToggle_theme');
          let financialToggle_theme = document.getElementById('financialToggle_theme');
          let financalToggle = document.getElementById('financalToggle');
          let contacToggle_theme = document.getElementById('contacToggle_theme');
          
          // let insideNav=document.querySelector(".link-25")[0];
          // let insideNavIcon=document.querySelector(".icon-47")[0];


          homeElement.classList.toggle("navlink-2_1");
          aboutElement.classList.toggle('navlink-2_1');
          aboutToggleIcon.classList.toggle('navlink-2_1');
          serviceToggle_theme.classList.toggle('navlink-2_1');
          serviceToggleIcon.classList.toggle('navlink-2_1');
          patientToggle_theme.classList.toggle('navlink-2_1');
          financialToggle_theme.classList.toggle('navlink-2_1');
          financalToggle.classList.toggle('navlink-2_1');
          contacToggle_theme.classList.toggle('navlink-2_1');
          // logoBrand.src.toggle('images/SmileWhite.png')
         let newImg =  document.querySelector('img[name="logoBrand"]');
         newImg.src = 'images/SmileWhite.png';
         newImg.sizes="(max-width: 991px) 100vw, (max-width: 1439px) 19vw, 260px";
         newImg.srcset="images/SmileWhite.png 500w, images/SmileWhite.png 800w, images/SmileWhite.png 1080w, images/SmileWhite.png 1790w"
          // insideNav.classList.toggle("link-25_1");
          // insideNavIcon.classList.toggle("icon-47_1");

          //refresh button code
        }
        function clickHandler2(){
          // setTimeout(() => {
            let newImg =  document.querySelector('img[name="logoBrand"]');
         newImg.src = 'images/smile.png';
         newImg.sizes="(max-width: 991px) 100vw, (max-width: 1439px) 19vw, 260px";
         newImg.srcset="images/smile-p-500.png 500w, images/smile-p-800.png 800w, images/smile-p-1080.png 1080w, images/smile.png 1790w"
            document.location.reload();
          // }, 0);
        }
        
        //increment
        const incrementButton = document.getElementById("incrementButton");
        const decrementButton = document.getElementById("decrementButton");
        // Get all elements within the body
        const allElements = document.body.getElementsByTagName("*");
        // Get the current font sizes of all elements within the body
        const getFontSizes = () => {
          const fontSizes = [];
          for (let i = 0; i < allElements.length; i++) {
            const fontSize = parseFloat(
              getComputedStyle(allElements[i]).fontSize
            );
            fontSizes.push(fontSize);
          }
          return fontSizes;
        };
     
        // Set the font sizes for all elements within the body
        const setFontSizes = (fontSizes) => {
          for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.fontSize = fontSizes[i] + "px";
          }
        };
        // Increase font sizes when the increment button is clicked
        incrementButton.addEventListener("click", () => {
          const currentFontSizes = getFontSizes();
          const newFontSizes = currentFontSizes.map((fontSize) => fontSize + 1);
          setFontSizes(newFontSizes);
        });
        // Decrease font sizes when the decrement button is clicked
        decrementButton.addEventListener("click", () => {
          const currentFontSizes = getFontSizes();
          const newFontSizes = currentFontSizes.map((fontSize) => fontSize - 1);
          setFontSizes(newFontSizes);
        });