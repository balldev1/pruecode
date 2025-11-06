$(document).ready(function () {
  const stats = [
    {
      icon: "bi-people-fill",
      label: "Total Employee",
      value: 323,
      percent: "+10%",
    },
    { icon: "bi-list-task", label: "Total Task", value: 88, percent: "+5%" },
    { icon: "bi-inbox-fill", label: "Inbox", value: 14, percent: "-2%" },
    {
      icon: "bi-calendar-check-fill",
      label: "Event",
      value: 6,
      percent: "+12%",
    },
  ];

  stats.forEach((item) => {
    // id ทีจะไปใช้ใน frontend
    $("#total_1").append(`
      <div class="col border rounded-4 p-3">
        <div class="d-flex align-items-center justify-content-between">
          <div class="d-flex align-items-center gap-2">
            <i class="text-primary bi ${item.icon}"></i>
            <h2 class="m-0" style="font-size: 0.85rem">${item.label}</h2>
          </div>
          <div>
            <i class="bi bi-grip-horizontal border px-1 rounded-2"></i>
          </div>
        </div>
        <div class="mt-5">
          <h2 class="fs-1 fw-bold">${item.value}</h2>
          <div class="d-flex gap-2">
            <h2 class="fs-6 text-success">
              <i class="bi bi-caret-up-fill"></i>
              ${item.percent}
            </h2>
            <h2 class="fs-6 text-black-50 fw-normal">vs last month</h2>
          </div>
        </div>
     </div>
    `);
  });
});
