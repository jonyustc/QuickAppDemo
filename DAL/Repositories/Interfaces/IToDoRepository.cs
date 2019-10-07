using System.Collections.Generic;
using DAL.Models;

namespace DAL.Repositories.Interfaces
{
    public interface IToDoRepository:IRepository<ToDo>
    {
         IEnumerable<ToDo> GetAllTasks();
         ToDo GetTask(int id);
         void AddToDoTask(ToDo toDo);
         void UpdateToDoTask(ToDo toDo);
         void DeleteToDoTask(ToDo toDo);
         
    }
}