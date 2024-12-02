package model;

import java.util.ArrayList;
import java.util.List;

public class StudentModel {
    private List<Student> students;

    public StudentModel() {
        this.students = new ArrayList<>();
    }

    public void addStudent(Student student) {
        students.add(student);
    }

    public List<Student> getStudents() {
        return students;
    }

    public double getAverageCGPA() {
        double totalCGPA = 0;
        for (Student student : students) {
            totalCGPA += student.getCgpa();
        }
        return students.size() > 0 ? totalCGPA / students.size() : 0;
    }

    public double getLowestCGPA() {
        double lowest = Double.MAX_VALUE;
        for (Student student : students) {
            if (student.getCgpa() < lowest) {
                lowest = student.getCgpa();
            }
        }
        return lowest;
    }
}
