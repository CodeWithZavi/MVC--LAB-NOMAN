import controller.StudentController;
import model.StudentModel;
import view.StudentView;

public class Main {
    public static void main(String[] args) {
        // Initialize the Model and View
        StudentModel model = new StudentModel();
        StudentView view = new StudentView();

        // Initialize the Controller
        StudentController controller = new StudentController(model, view);

        // Add student data through the Controller
        controller.addStudent("Ayesha", "Karachi", "BSE", 3.6);
        controller.addStudent("Alina", "Lahore", "BSE", 3.9);
        controller.addStudent("Zara", "Islamabad", "BSE", 3.2);
        controller.addStudent("Minahil", "Karachi", "BSE", 3.5);
        controller.addStudent("Hina", "Peshawar", "BSE", 2.8);

        // Update and display student records and statistics through the Controller
        controller.displayStudentDetails();
    }
}
