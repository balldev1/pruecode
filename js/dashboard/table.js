$(document).ready(function () {
  const attendanceData = [
    { id: 1, first: "Mark", last: "Otto", handle: "@mdo" },
    { id: 2, first: "Jacob", last: "Thornton", handle: "@fat" },
    { id: 3, first: "John", last: "Doe", handle: "@social" },
    { id: 4, first: "Jane", last: "Smith", handle: "@js" },
  ];

  let rows = "";

  attendanceData.forEach((item) => {
    rows += `
      <tr>
        <th>${item.id}</th>
        <td>${item.first}</td>
        <td>${item.last}</td>
        <td>${item.handle}</td>
      </tr>
    `;
  });

  $("#table_1").html(`
    <div class="d-flex align-items-center justify-content-between">
      <h2 class="m-0 fs-6">Attendance</h2>
      <div class="d-flex gap-2">
        <i class="m-0 bi bi-sliders2-vertical border px-1 rounded-2"></i>
        <i class="m-0 bi bi-grip-horizontal border px-1 rounded-2"></i>
      </div>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>First</th>
          <th>Last</th>
          <th>Handle</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `);
});
