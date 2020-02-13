using DAL.Models;
using DAL.Repositories.Interfaces;

namespace DAL.Repositories
{
    public class RegistrationRepository : Repository<User>,IRegistrationRepository
    {
        private readonly ApplicationDbContext _dbContext;

        public RegistrationRepository(ApplicationDbContext dbContext) : base(dbContext)
        {
            _dbContext=dbContext;
        }
    }
}