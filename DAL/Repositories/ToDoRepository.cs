using System.Collections.Generic;
using System.Linq;
using DAL.Models;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class ToDoRepository : Repository<ToDo>,IToDoRepository
    {
        private ApplicationDbContext _appContext;
        public ToDoRepository(ApplicationDbContext context):base(context)
        {
            _appContext=context;
        }

        public IEnumerable<ToDo> GetAllTasks()
        {
            return _appContext.ToDos.ToList();
        }

        public ToDo GetTask(int id){
            return _appContext.ToDos.Find(id);
        }

        public void AddToDoTask(ToDo toDo){
            _appContext.Add(toDo);
        }

        public void UpdateToDoTask(ToDo toDo){
            _appContext.Update(toDo);
        }

        public void DeleteToDoTask(ToDo toDo)
        {
            _appContext.Remove(toDo);
        }
    }
}