window.onload = function () {
  var chart = new CanvasJS.Chart("chartContainer", {
    animationEnabled: true,
    title:{
      text: "Diagrammes des Activites",
      horizontalAlign: "left"
    },
    data: [{
      type: "doughnut",
      startAngle: 60,
      innerRadius: 60,
      indexLabelFontSize: 17,
      indexLabel: "{label} - #percent%",
      toolTipContent: "<b>{label}:</b> {y} (#percent%)",
      dataPoints: [
        { y: 67, label: "Inbox" },
        { y: 28, label: "Archives" },
        { y: 10, label: "Labels" },
        { y: 7, label: "Drafts"},
      ]
    }]
  });
  chart.render();
  }
