package com.go.prueba.GoApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
public class GoApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(GoApiApplication.class, args);
	}

}
