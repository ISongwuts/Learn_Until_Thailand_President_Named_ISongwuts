// Enum with unitialized
enum Role {
    student,
    teacher,
    admin
}

console.log(Role.admin) // log 2
//Role.student = 'student' // Error: Cannot assign to 'student' because it is a read-only property.

// Enum with fully initialized
enum newRole {
    student = 'student',
    teacher = 'teacher',
    admin = 'admin'
}
console.log(newRole.admin) // log 'admin'



