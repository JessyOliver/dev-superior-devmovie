package com.devsuperior.devmovie.repositores;

import com.devsuperior.devmovie.entities.Score;
import com.devsuperior.devmovie.entities.ScorePK;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>  {
}
