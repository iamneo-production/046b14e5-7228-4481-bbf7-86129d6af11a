package com.examly.springapp.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.Models.FileDB;
//import ma.files.store.model.FileDB;

import com.examly.springapp.Repository.FileDBRepository;

@Repository
public interface FileDBRepository extends JpaRepository<FileDBRepository, String>

 {

    FileDBRepository save(FileDB fileDB);

    String getId();

    String getName();

    String getType();

    Object getData();

  }