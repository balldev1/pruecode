$(document).ready(function () {
  // สร้างโครงสร้าง navbar
  $("#navbar_1").html(`
     <div class="py-4 gap-2 d-flex align-items-center justify-content-between"
        style="margin-left: 10rem; margin-right: 10rem">

        <div class="d-flex align-items-center gap-2">
          <img src="public/logo.png"
            width="60"
            height="60"
            class="p-2 rounded-circle shadow bg-light"
            style="cursor: pointer" />

          <a href="/login.html" class="d-flex flex-column no-border text-white">
            <h2 class="fs-6 m-0">Balldev1</h2>
            <h2 class="fw-light m-0" style="font-size: 0.86rem">
              Lorem ipsum dolor.
            </h2>
          </a>
        </div>

        <div id="menu-route" class="d-flex gap-4"></div>
     </div>
  `);

  // menu route data (แบบ object)
  const routes = [
    { name: "Dashboard", url: "/pages/dashboard.html" },
    { name: "Employee", url: "/pages/employee.html" },
    { name: "Attendance", url: "/pages/attendance.html" },
    { name: "Setting", url: "/pages/setting.html" },
  ];

  // loop สร้างเมนู
  routes.forEach((route) => {
    $("#menu-route").append(`
      <a href="${route.url}" class="text-white no-border">${route.name}</a>
    `);
  });
});
