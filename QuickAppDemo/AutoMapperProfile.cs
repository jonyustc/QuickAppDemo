using AutoMapper;
using DAL.Models;
using QuickAppDemo.ViewModels;

namespace QuickAppDemo
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<ToDo,ToDoViewModel>().ReverseMap();
        }
    }
}