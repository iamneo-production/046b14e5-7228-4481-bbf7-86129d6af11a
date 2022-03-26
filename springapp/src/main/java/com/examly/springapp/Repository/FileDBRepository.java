package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import com.examly.springapp.Models.FileDB;

@Component
public interface FileDBRepository extends JpaRepository<FileDB, String>

 {
    String getId();
    String getName();
    String getType();
    Object getData();

  }