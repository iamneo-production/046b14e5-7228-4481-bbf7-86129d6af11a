// package com.examly.springapp.Services;

// import java.io.IOException;
// import java.util.stream.Stream;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.util.StringUtils;
// import org.springframework.web.multipart.MultipartFile;
// 	private FileDBRepository fileDBRepository;

// 	public FileDBRepository store(MultipartFile file) throws IOException 
//   {
// 		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
// 		FileDB FileDB = new FileDB(fileName, file.getContentType(), file.getBytes());
