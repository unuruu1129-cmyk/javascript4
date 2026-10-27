// const laptop = {
//   brand: "Lenova",
//   ram: 16,
//   storage: 512
// };
// console.log(Object.keys(laptop));

// const weather = {
//   city: "Дархан",
//   temperature: 12,
//   isSunny: true,
// };
// console.log(Object.values(weather));

// const phone = {
//   brand: "Samsung",
//   model: "Galaxy",
//   storage: 256,
//   color: "Хар",
// };
// const phoneArray= Object.keys(phone)
// console.log(phoneArray.length);

// const settings={};
// const settingsQou= Object.keys(settings)
// console.log( settingsQou.length==0 ? "Тохиргоо оруулаагүй" : "Тохиргоо оруулсан");

// const sizes = ["S", "M", "L"];
// console.log(sizes.indexOf("XL"));

// const steps = ["Эхлэл", "Дунд", "Төгсгөл"];
// console.log(steps.reverse());

// const tags = "спорт,хөгжим,аялал";
// console.log(tags.split(","));

// const playlist = {
//   name: "Өглөө",
//   songs: ["Нар", "Салхи", "Бороо"],
// };

// const template = `${playlist.name} нэртэй жагсаалтад ${playlist.songs.length} дуу байна. Хоёр дахь дуу нь ${playlist.songs[1]}.`;

// console.log(template);

// const pets = [
//   { name: "Банхар", type: "Нохой" },
//   { name: "Мими", type: "Муур" },
// ];
// console.log(`Нэр: ${pets[1].name}, төрөл: ${pets[1].type}`);

// const classroom = {
//   name: "10A",
//   teacher: { name: "Оюун", subject: "Математик" },
// };
// const template = `${classroom.name} ангийн багш ${classroom.teacher.name}. Заадаг хичээл: ${classroom.teacher.subject}.`;
// console.log(template);

// const store = {
//   branches: [
//     { name: "Төв", hours: ["09:00", "18:00"] },
//     { name: "Баруун", hours: ["10:00", "20:00"] },
//   ],
// };
// const template = `${store.branches[1].name} салбар ${store.branches[1].hours[1]} цагт хаана.`;
// console.log(template);

// const user = {
//   email: "anu@example.com",
//   password: "pass123",
//   isBlocked: false,
// };
// const enteredEmail = "anu@example.com";
// const enteredPassword = "pass123";
// if (user.isBlocked === true) {
//   console.log("Хандах эрх хаагдсан");
// } else if (user.email === enteredEmail && user.password === enteredPassword) {
//   console.log("Амжилттай нэвтэрлээ");
// } else {
//   console.log("И-мэйл эсвэл нууц үг буруу");
// }

// const user = {
//   role: "editor",
//   isActive: true,
// };
// if (user.isActive === false) {
//   console.log("Эрх идэвхгүй");
// } else if (user.role === "admin") {
//   console.log("Бүх мэдээллийг удирдана");
// } else if (user.role === "editor") {
//   console.log("Мэдээлэл засна");
// } else {
//   console.log("Зөвхөн мэдээлэл үзнэ");
// }

// const visitor = {
//   age: 12,
//   isStudent: true,
//   tickerPrice : 12000,
// };
// if (visitor.age < 12 && visitor.isStudent === true) {
//   console.log(visitor.tickerPrice-visitor.tickerPrice * 0.5);
// } else if (visitor.age >= 12 && visitor.isStudent === true) {
//   console.log(visitor.tickerPrice-visitor.tickerPrice * 0.25);
// } else {
//     console.log(visitor.tickerPrice);
// }

// const order = {
//   subtotal: 80000,
//   coupon: "SAVE10",
//   couponUsed: false,
// };
// if (order.couponUsed === true) {
//   console.log("Купон ашиглагдсан");
// } else if (order.coupon === "SAVE10" && order.subtotal >= 50000 && order.couponUsed===false) {
//   console.log((order.subtotal = order.subtotal - order.subtotal * 0.1));
// } else {
//   console.log("Купон хэрэглэх боломжгүй");
// }

// const member = {
//   name: "Номин",
//   borrowedBooks: ["Атлас", "Нууц арал"],
//   hasOverdue: false,
// };
// if (member.hasOverdue === true) {
//   console.log("Хугацаа хэтэрсэн тул ном зээлэхгүй");
// } else if (member.hasOverdue === false && member.borrowedBooks.length < 3) {
//   member.borrowedBooks.push("Оддын тухай");
//   console.log(member.borrowedBooks);
// } else {
//   console.log("Зээлэх номын хязгаарт хүрсэн");
// }

const seats = ["Сул", "Захиалсан", "Сул"];
const selectedIndex = 2;
