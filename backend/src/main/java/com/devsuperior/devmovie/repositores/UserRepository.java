package com.devsuperior.devmovie.repositores;

import com.devsuperior.devmovie.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>  {

    User findByEmail(String email);
}
