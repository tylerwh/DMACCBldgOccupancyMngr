package com.dbom.dmaccbldgoccupancymngr;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Occupant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String fname;
    private String lname;

    public int getBldgNum() {
        return bldgNum;
    }

    private int bldgNum;

    public Occupant(String fname, String lname, int bldgNum) {
        this.fname = fname;
        this.lname = lname;
        this.bldgNum = bldgNum;
    }

    public Occupant() {

    }

    public long getId() { return id; }

    public String getFname() {
        return fname;
    }

    public String getLname() {
        return lname;
    }

    @Override
    public String toString() {
        return "Occupant{" +
                "id=" + id +
                ", fname='" + fname + '\'' +
                ", lname='" + lname + '\'' +
                '}';
    }
}
