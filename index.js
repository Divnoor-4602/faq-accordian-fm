let help =
  "Frontend Mentor offers realistic coding challanges to help developers improve their frontend coding skills with projects in HTML, CSS, Javascript. It is suitable for all levels and ideal for portfolio building";

let free =
  "Yes the frontend mentor is completely free for some projects and acts as a freemium app to be used for practise and protfolio projetcs";

let projects =
  "Front-end mentor projects can be put into github pages for recuriters to see or be directly put into the resumes for personal use";

let challenge =
  "If you feel stuck don't hesitate to visit the online community support";

let recentInfo;

//  adding an event listner to all the buttons
$("button")
  .click(function () {
    $(this).toggleClass("minus-sign");
    $(this).text() == "+" ? $(this).text("-") : $(this).text("+");
  })
  .click(function () {
    let buttonClickedId = $(this).attr("id");
    if ($(this).text() == "-") {
      collapseOpenInformation(buttonClickedId);
      addText(buttonClickedId, true);
    } else {
      addText(buttonClickedId, false);
    }
  });

function addText(buttonClickedId, addRemove) {
  if (addRemove) {
    switch (buttonClickedId) {
      case "help":
        $("#more-info-1").text(help);
        recentInfo = $("#more-info-1");
        break;
      case "free":
        $("#more-info-2").text(free);
        recentInfo = $("#more-info-2");
        break;
      case "projects":
        $("#more-info-3").text(projects);
        recentInfo = $("#more-info-3");
        break;
      case "challenge":
        $("#more-info-4").text(challenge);
        recentInfo = $("#more-info-4");
        break;

      default:
        break;
    }
  } else {
    switch (buttonClickedId) {
      case "help":
        $("#more-info-1").text("");
        break;
      case "free":
        $("#more-info-2").text("");
        break;
      case "projects":
        $("#more-info-3").text("");
        break;
      case "challenge":
        $("#more-info-4").text("");
        break;

      default:
        break;
    }
  }
}

function collapseOpenInformation(buttonId) {
  // console.log(lastButton);
  if (recentInfo != undefined) {
    changeButtonDefault();
    $("#" + buttonId)
      .toggleClass("minus-sign")
      .text("-");
    recentInfo.text("");
  } else {
    console.log("No recent button pressed");
  }
}

function changeButtonDefault() {
  $("button").removeClass("minus-sign").addClass("show-more-symbol").text("+");
}
