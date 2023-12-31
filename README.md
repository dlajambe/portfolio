# My Portfolio Website

## Description

This project was used to create my personal software development and machine learning portfolio website.

## Getting Started

### Dependencies

All that is required is Python version 3.10.5 and a virtual environment creation tool, such as virtualenv or conda. The required Python packages are listed in the `requirements.txt` file (pip) and `environment.yml` file (conda).

### Installation

To install, simply clone the repository onto your machine and use your virtual environment creation tool to recreate the environment with the provided `requirements.txt` file. If you have Anaconda or Miniconda, you can instead use the `environment.yml` to reproduce the environment.

### Execution

The website can be started locally through the command line. With your virtual environment activated, navigate to the `portfolio/` directory and execute the following command: 
```
python main.py
```

To update the `requirements.txt` file, run the following command:
```
pip list --format=freeze > requirements.txt
```
To update the `environment.yml` file, run the following command:
```
conda env export > environment.yml
```

## License

This project is licensed under the Apache version 2.0 License - see the LICENSE.md file for details
