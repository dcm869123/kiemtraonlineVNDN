const USERS_DATABASE = [
    { username: "L4M", password: "mocmeo090", role: "admin", fullname: "Quản Trị Viên" },
    { username: "student1", password: "123", role: "student", fullname: "Nguyễn Văn A" },
    { username: "student2", password: "123", role: "student", fullname: "Trần Thị B" }
];

function checkLogin(username, password) {
    const user = USERS_DATABASE.find(u => u.username === username && u.password === password);
    return user || null;
}