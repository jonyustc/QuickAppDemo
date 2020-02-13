using DAL.Repositories;
using DAL.Repositories.Interfaces;

namespace DAL
{
    public class UnitOfWork : IUnitOfWork
    {
        readonly ApplicationDbContext _context;

        IToDoRepository _toDo;
        ILoginRepository _login;
        IRegistrationRepository _registration;

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

        public ILoginRepository Logins
        {
            get{
                if(_login==null)
                    _login=new LoginRepository(_context);
                
                return _login;
            }
        }

        public IRegistrationRepository Users
        {
            get
            {
                if(_registration==null)
                    _registration=new RegistrationRepository(_context);
                
                return _registration;
            }
        }

        public int SaveChanges(){
            return _context.SaveChanges();
        }

    }
}