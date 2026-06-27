const USERS_DATABASE = [
    { username: "L4M", password: "mocmeo090", role: "admin", fullname: "L4M" },
    { username: "boidongnai", password: "123456", role: "admin", fullname: "Boideptrai" },
    { username: "kru_alien", password: "11223344", role: "admin", fullname: "admin ngheo ngheo" },
    { username: "student2", password: "123", role: "student", fullname: "Trần Thị B" }
];

function checkLogin(username, password) {
    const user = USERS_DATABASE.find(u => u.username === username && u.password === password);
    return user || null;
}
