package com.devsuperior.devmovie.repositores;

import com.devsuperior.devmovie.entities.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie, Long>  {
}
