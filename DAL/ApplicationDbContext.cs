using DAL.Models;
using Microsoft.EntityFrameworkCore;

namespace DAL
{
    public class ApplicationDbContext : DbContext
    {

        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
            
        }

        

        public DbSet<ToDo> ToDos { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Role> Roles { get; set; }
        public DbSet<UserRole> UserRoles { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder){
            modelBuilder.Entity<UserRole>().HasKey(x=>new{ x.UserId,x.RoleId});

            modelBuilder.Entity<UserRole>()
                .HasOne<User>(x=>x.User)
                .WithMany(x=>x.UserRoles)
                .HasForeignKey(x=>x.UserId);
            
            modelBuilder.Entity<UserRole>()
                .HasOne<Role>(x=>x.Role)
                .WithMany(x=>x.UserRoles)
                .HasForeignKey(x=>x.RoleId);

            modelBuilder.Entity<User>()
                .HasData(new User{
                    Id=1,
                    UserName="admin",
                    Email="admin@example.com",
                    Password="12345"
                });
            
            modelBuilder.Entity<Role>()
                .HasData(new Role{
                    Id=1,
                    RoleName="Admin"
                });
            
            modelBuilder.Entity<UserRole>()
                .HasData(new UserRole{
                    UserId=1,
                    RoleId=1
                });
        }
        
    }
}