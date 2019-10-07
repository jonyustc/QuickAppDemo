using System.Collections.Generic;
using AutoMapper;
using DAL;
using DAL.Models;
using DAL.Repositories.Interfaces;
using Microsoft.AspNetCore.Mvc;
using QuickAppDemo.ViewModels;

namespace QuickAppDemo.Controllers
{
    [Route("api/[controller]")]
    public class ToDoController : Controller
    {
        private IMapper _mapper;
        public IUnitOfWork _unitOfWork { get; }
        public ToDoController(IUnitOfWork unitOfWork,IMapper mapper)
        {
            _unitOfWork =unitOfWork;
            _mapper=mapper;

        }

        [HttpGet]
        public IActionResult GetToDoTasks(){
            var allTasks=_unitOfWork.ToDos.GetAllTasks();
            return Ok(_mapper.Map<IEnumerable<ToDoViewModel>>(allTasks));
        }


        [HttpGet("{id}")]
        public IActionResult GetToDoTasks(int id){
            var task=_unitOfWork.ToDos.GetTask(id);
            return Ok(_mapper.Map<ToDoViewModel>(task));
        }

        [HttpPost]
        public IActionResult PostToDoTasks([FromBody] ToDoViewModel toDoVM){
            var toDo=_mapper.Map<ToDoViewModel,ToDo>(toDoVM);
            _unitOfWork.ToDos.AddToDoTask(toDo);
            _unitOfWork.SaveChanges();

            return Ok(toDo);
        }

        [HttpPut]
        public IActionResult PutToDoTasks([FromBody] ToDoViewModel toDoVM){
            var toDo=_mapper.Map<ToDoViewModel,ToDo>(toDoVM);
            _unitOfWork.ToDos.UpdateToDoTask(toDo);
            _unitOfWork.SaveChanges();

            return Ok(toDo);
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteToDoTasks(int id){
             var task=_unitOfWork.ToDos.GetTask(id);
            _unitOfWork.ToDos.DeleteToDoTask(task);
            _unitOfWork.SaveChanges();

            return Ok(task);
        }
    }
}