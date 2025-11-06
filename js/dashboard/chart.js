$(document).ready(function () {
  const ctx = document.getElementById("chart_1");

  new Chart(ctx, {
    type: "bar", // line, pie, doughnut, radar ฯลฯ
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Total Employee",
          data: [100, 120, 150, 180, 200, 230],
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});
