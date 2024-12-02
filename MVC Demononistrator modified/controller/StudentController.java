package controller;

import model.Student;
import model.StudentModel;
import view.StudentView;

import java.util.List;

public class StudentController {
    private StudentModel model;
    private StudentView view;

    public StudentController(StudentModel model, StudentView view) {
        this.model = model;
        this.view = view;
    }

    public void addStudent(String name, String city, String course, double cgpa) {
        Student student = new Student(name, city, course, cgpa);
        model.addStudent(student);
    }

    public void displayStudentDetails() {
        List<Student> students = model.getStudents();
        view.displayStudentRecords(students);

        double avgCGPA = model.getAverageCGPA();
        double lowestCGPA = model.getLowestCGPA();
        view.displayStatistics(avgCGPA, lowestCGPA);
    }
}
