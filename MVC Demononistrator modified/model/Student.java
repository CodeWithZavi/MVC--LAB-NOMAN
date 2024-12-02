package model;

public class Student {
    private String name;
    private String city;
    private String course;
    private double cgpa;

    public Student(String name, String city, String course, double cgpa) {
        this.name = name;
        this.city = city;
        this.course = course;
        this.cgpa = cgpa;
    }

    public String getName() {
        return name;
    }

    public String getCity() {
        return city;
    }

    public String getCourse() {
        return course;
    }

    public double getCgpa() {
        return cgpa;
    }
}
