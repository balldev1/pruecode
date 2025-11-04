# flex items-center justify-center

d-flex justify-content-center align-items-center
fs-1

สรุปฟังก์ชัน jQuery ที่นิยมใช้หลัก ๆ
หมวด ฟังก์ชันหลัก หน้าที่ / ตัวอย่างใช้งาน
เลือก element (Selector) $(selector) เลือก element จาก DOM เหมือน document.querySelectorAll()

$("#id"), $(".class"), $("div > a")
DOM Ready $(function(){ ... }) รอให้หน้าโหลดเสร็จก่อนรันโค้ด (เหมือน DOMContentLoaded)

$(function(){ console.log("ready!") })
เปลี่ยน/อ่านค่า .text(), .html(), .val() อ่านหรือแก้ข้อความ / HTML / value ของ input

$("#msg").text("สวัสดี")
เปลี่ยน style / class .css(), .addClass(), .removeClass(), .toggleClass() จัดการ CSS / class ของ element

$(".box").css("color","red")
ซ่อน/แสดง .hide(), .show(), .toggle() ซ่อนหรือแสดง element

$("#menu").toggle()
Event (เหตุการณ์) .on(), .click(), .change(), .submit() จัดการ event เช่นคลิก, เปลี่ยนค่า, กดส่งฟอร์ม

$("#btn").click(function(){ alert("คลิกแล้ว!") })
Loop / iterate .each() วนลูป element ที่เลือกมา

$("li").each(function(i){ console.log(i, $(this).text()) })
Animation .fadeIn(), .fadeOut(), .slideUp(), .slideDown() ทำเอฟเฟกต์แสดง/ซ่อนอย่างนุ่มนวล

$(".box").fadeOut(500)
AJAX / โหลดข้อมูล .load(), $.get(), $.post(), $.ajax() ดึงข้อมูลหรือ HTML จากไฟล์หรือ API

$("#nav").load("partials/navbar.html")
Attribute .attr(), .removeAttr(), .prop() อ่านหรือเปลี่ยนค่า attribute เช่น src, href, checked

$("img").attr("src", "pic.png")
Traversal (เดิน DOM) .parent(), .children(), .find(), .next(), .prev() เดินหาญาติพี่น้องของ element ใน DOM tree
$("#item").parent().addClass("active")

#ดึง pathname
window.location.pathname
