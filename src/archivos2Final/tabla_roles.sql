CREATE TABLE public.roles (
	rol_id serial NOT NULL,
	rol_fecha date NULL,
	rol_descripcion varchar NULL,
	rol_usuario_id integer NULL,
	CONSTRAINT roles_pk PRIMARY KEY (rol_id),
	CONSTRAINT roles_fk FOREIGN KEY (rol_usuario_id) REFERENCES public.usuarios(usu_codigo)
);
