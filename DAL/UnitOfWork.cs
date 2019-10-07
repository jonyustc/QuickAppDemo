using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        IToDoRepository _toDo;

        public UnitOfWork(ApplicationDbContext context)
        {
            _context=context;
        }


        public  IToDoRepository ToDos
        {
           get
           {
               if(_toDo==null)
                    _toDo=new ToDoRepository(_context);
                

                return _toDo;
           }
        }

        public int SaveChanges(){
            return _context.SaveChanges();
        }

    }
}