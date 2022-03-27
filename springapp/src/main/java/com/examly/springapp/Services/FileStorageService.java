// package com.examly.springapp.Services;

// import java.io.IOException;
// import java.util.stream.Stream;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;
// import org.springframework.util.StringUtils;
// import org.springframework.web.multipart.MultipartFile;
// import com.examly.springapp.Models.FileDB;
// import com.examly.springapp.Repository.FileDBRepository;

// @Service
// public class FileStorageService 
// {
// 	@Autowired
// 	private FileDBRepository fileDBRepository;
// 	public void store(MultipartFile file) throws IOException 
//   	{
// 		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
// 		FileDB fileDb = new FileDB(fileName, file.getContentType(), file.getBytes());

// 		this.fileDBRepository.save(fileDb);
// 	}
// 	public FileDB getFile(String id) {
// 		return this.fileDBRepository.findById(id).get();
// 	}
// 	public Stream<FileDB> getAllFiles() {
// 		return this.fileDBRepository.findAll().stream();
// 	}
// 	public String deletFileById(String id) {
// 		if (this.fileDBRepository.existsById(id)) {
// 			this.fileDBRepository.deleteById(id);
// 			return "File has been successfully deleted";
// 		}
// 		return "File doesn't exist";
// 	}
// }