import React from 'react';

const FilterBar = ({ types, difficulties, selectedType, selectedDifficulty, handleTypeChange, handleDifficultyChange }) => {
  return (
    <div className="filter-bar">
      <label>
        Type:
        <select value={selectedType} onChange={handleTypeChange}>
          {types.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Difficulty:
        <select value={selectedDifficulty} onChange={handleDifficultyChange}>
          {difficulties.map((difficulty) => (
            <option key={difficulty} value={difficulty}>
              {difficulty}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default FilterBar;
