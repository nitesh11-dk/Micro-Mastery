
import java.util.ArrayList;

import java.util.Stack;

public class StudentInfoSystem {
    ArrayList<Student> students;
    Stack<String> actions;

    public StudentInfoSystem() {
        students = new ArrayList<>();
        actions = new Stack<>();
    }

import java.util.Scanner;

public boolean addStudent() {
    Scanner scanner = new Scanner(System.in);
    System.out.print("Enter student name: ");
    String name = scanner.nextLine();    
    Student student = new Student(name);
    students.add(student);
    System.out.println("Student added: " + name);
    return true;
}



    public void removeStudent(int studentNumber) {
        // TODO 4: Search for the student with the given student number in the list.
        // TODO 5: If found, remove the student from the list and log the action number.
        // TODO 6: If not found, print a message indicating no student was found.
    }

    public void viewStudents() {
        if (students.isEmpty()) {
            System.out.println("No students available.");
            return;
        }

        for (Student student : students) {
            System.out.println("Student Details:");
            System.out.println("Student Name: " + student.name);
            System.out.println("Student Number: " + student.studentNumber);

            if (student.subjects != null && student.subjects.length > 0) {
                System.out.println("Subjects:");
                for (String subject : student.subjects) {
                    System.out.println(" " + subject);
                }
            } else {
                System.out.println("No subjects available.");
            }
            if (student.examSchedule != null) {
                System.out.println("exam schedule : ");
                student.examSchedule.printSchedule();
            } else {
                System.out.println("No exam schedule available.");
            }
            System.out.println();
        }
    }

    public void viewExamSchedule(int studentNumber) {
        for (Student student : students) {
            if (student.studentNumber == studentNumber) {
                System.out.println("Exam Schedule for " + student.name + ":");
                student.examSchedule.printSchedule();
                return;
            }
        }
        System.out.println("Student not found.");
    }
    public void undoLastAction() {
        // TODO 19: check if there are any actions to undo
        // TODO 20: handle undoing the addition of a student
        // TODO 21: find and remove the student by name
        // TODO 22: handle undoing the removal of a student
    }

    public void navigateNextExam(int studentNumber) {
        //TODO 7:  Find the student with the provided student number
        //TODO 8: Check if the current reference in the exam schedule is null and reset it if necessary
        // TODO 9:  Retrieve and display the details of the next exam in the schedule
        // TODO 10: Handle the case where the student with the given number is not found
    }

    public void navigatePreviousExam(int studentNumber) {
        //TODO 13: Find the student with the provided student number
        // TODO 14: Initialize the current pointer to the last exam if it's null
        //TODO 15: Display the details of the previous exam
        //TODO 16: Inform if the student is not found
    }
}