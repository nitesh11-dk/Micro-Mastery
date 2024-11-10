import java.util.ArrayList;
import java.util.Scanner;
import java.util.Stack;

// Define the ExamNode class
class ExamNode {
    String date;
    String time;
    String subject;
    ExamNode next;
    ExamNode previous;

    public ExamNode(String date, String time, String subject) {
        this.date = date;
        this.time = time;
        this.subject = subject;
        this.next = null;
        this.previous = null;
    }
}

// Define the ExamSchedule class
class ExamSchedule {
    private ExamNode head;
    private ExamNode current;

    public ExamSchedule() {
        head = null;
        current = null;
    }

    // TODO 2: Implement logic to add an exam to the end of the linked list
    public void addExam(String date, String time, String subject) {
        ExamNode newNode = new ExamNode(date, time, subject);

        if (head == null) {
            head = newNode;
            current = newNode;
        } else {
            ExamNode lastNode = head;
            while (lastNode.next != null) {
                lastNode = lastNode.next;
            }
            lastNode.next = newNode;
            newNode.previous = lastNode;
        }

        System.out.println("Exam added: " + date + " - " + time + " - " + subject);
    }

    // TODO 3: Implement the logic to move to the next exam in the list and display it
    public void viewNextExam() {
        if (current == null) {
            System.out.println("No exams available.");
            return;
        }

        // Print the details of the current exam
        System.out.println("Next Exam: " + current.date + " - " + current.time + " - " + current.subject);

        // Move the current pointer to the next exam if available
        if (current.next != null) {
            current = current.next;
        } else {
            System.out.println("You have reached the last exam.");
        }
    }

    // Method to reset the current pointer to the head (start of the schedule)
    public void resetSchedule() {
        current = head;
    }

    // Method to print all exams in the schedule
    public void printSchedule() {
        if (head == null) {
            System.out.println("No exams scheduled.");
            return;
        }

        ExamNode node = head;
        while (node != null) {
            System.out.println(node.date + " - " + node.time + " - " + node.subject);
            node = node.next;
        }
    }
}

// Define the Student class
class Student {
    String name;
    int studentNumber;
    ExamSchedule examSchedule;

    public Student(String name, int studentNumber) {
        this.name = name;
        this.studentNumber = studentNumber;
        this.examSchedule = new ExamSchedule();
    }
}

// Define the StudentInfoSystem class
public class StudentInfoSystem {
    ArrayList<Student> students;
    Stack<String> actions;

    public StudentInfoSystem() {
        students = new ArrayList<>();
        actions = new Stack<>();
    }

    // TODO 1: Implement a method to add a new student to the ArrayList
    public boolean addStudent(Student student) {
        students.add(student);
        actions.push("Added student: " + student.name);
        System.out.println("Student added: " + student.name);
        return true;
    }

    // Method to add an exam to a student's schedule
    public void addExam(int studentNumber) {
        Scanner scanner = new Scanner(System.in);

        Student student = findStudent(studentNumber);
        if (student == null) {
            System.out.println("Student not found.");
            return;
        }

        System.out.print("Enter exam date (e.g., 2024-12-12): ");
        String date = scanner.nextLine();

        System.out.print("Enter exam time (e.g., 10:00 AM): ");
        String time = scanner.nextLine();

        System.out.print("Enter subject: ");
        String subject = scanner.nextLine();

        student.examSchedule.addExam(date, time, subject);
    }

    // Method to view the next exam in a student's schedule
    public void viewNextExam(int studentNumber) {
        Student student = findStudent(studentNumber);
        if (student == null) {
            System.out.println("Student not found.");
            return;
        }

        student.examSchedule.viewNextExam();
    }

    // Helper method to find a student by their student number
    private Student findStudent(int studentNumber) {
        for (Student student : students) {
            if (student.studentNumber == studentNumber) {
                return student;
            }
        }
        return null;
    }

    public static void main(String[] args) {
        StudentInfoSystem system = new StudentInfoSystem();
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("Options:");
            System.out.println("1. Add Student");
            System.out.println("2. Add Exam");
            System.out.println("3. View Next Exam");
            System.out.println("4. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();
            scanner.nextLine();  // Consume newline

            if (choice == 1) {
                System.out.print("Enter student name: ");
                String name = scanner.nextLine();
                System.out.print("Enter student number: ");
                int studentNumber = scanner.nextInt();
                scanner.nextLine();  // Consume newline

                Student student = new Student(name, studentNumber);
                system.addStudent(student);

            } else if (choice == 2) {
                System.out.print("Enter student number to add exam: ");
                int studentNumber = scanner.nextInt();
                scanner.nextLine();  // Consume newline

                system.addExam(studentNumber);

            } else if (choice == 3) {
                System.out.print("Enter student number to view next exam: ");
                int studentNumber = scanner.nextInt();
                scanner.nextLine();  // Consume newline

                system.viewNextExam(studentNumber);

            } else if (choice == 4) {
                System.out.println("Exiting...");
                break;
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
