package view;

import model.Student;
import java.util.List;

public class StudentView {
    public void displayStudentRecords(List<Student> students) {
        System.out.println("Student Records:");
        for (Student student : students) {
            System.out.println("Name: " + student.getName());
            System.out.println("City: " + student.getCity());
            System.out.println("Course: " + student.getCourse());
            System.out.println("CGPA: " + student.getCgpa());
            System.out.println("----------------------");
        }
    }

    public void displayStatistics(double avgCGPA, double lowestCGPA) {
        System.out.println("\nAverage CGPA: " + avgCGPA);
        System.out.println("Lowest CGPA: " + lowestCGPA);
    }
}
