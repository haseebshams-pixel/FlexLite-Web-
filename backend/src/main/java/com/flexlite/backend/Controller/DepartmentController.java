package com.flexlite.backend.Controller;

import java.util.List;

import com.flexlite.backend.Model.Department;
import com.flexlite.backend.Repository.DepartmentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/department")
@CrossOrigin
public class DepartmentController {
    @Autowired
    private DepartmentRepository departmentRepository;

    @GetMapping("/")
    public List<Department> GetUsers() {
        return departmentRepository.findAll();
    }
    @GetMapping("/{id}")
    public Department GetUser(@PathVariable Integer id) {
        return departmentRepository.findById(id).orElse(null);
    }
    @PostMapping("/")
    public Department PostUser(@RequestBody Department user) {
        return departmentRepository.save(user);
    }
    @PutMapping("/")
    public Department PutUser(@RequestBody Department user) {
        Department oldUser = departmentRepository.findById(user.getId()).orElse(null);
        oldUser.setId(user.getId());
        oldUser.setName(user.getName());
        oldUser.setRegBool(user.isRegBool());
        oldUser.setTranscriptBool(user.isTranscriptBool());
        oldUser.setWithdrawbool(user.isWithdrawbool());
        return departmentRepository.save(oldUser);
    }
    @DeleteMapping("/{id}")
    public Integer DeleteUser(@PathVariable Integer id) {
        departmentRepository.deleteById(id);
        return id;
    }
}