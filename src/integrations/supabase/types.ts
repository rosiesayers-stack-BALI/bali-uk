export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      conference_interest: {
        Row: {
          company: string | null
          created_at: string
          email: string
          id: string
          member: boolean
          name: string
          notes: string | null
          role: string | null
          sponsor_interest: boolean
        }
        Insert: {
          company?: string | null
          created_at?: string
          email: string
          id?: string
          member?: boolean
          name: string
          notes?: string | null
          role?: string | null
          sponsor_interest?: boolean
        }
        Update: {
          company?: string | null
          created_at?: string
          email?: string
          id?: string
          member?: boolean
          name?: string
          notes?: string | null
          role?: string | null
          sponsor_interest?: boolean
        }
        Relationships: []
      }
      events: {
        Row: {
          body_paragraphs: string[]
          booking_url: string | null
          category: string
          created_at: string
          date_text: string
          description: string
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
          venue: string
        }
        Insert: {
          body_paragraphs?: string[]
          booking_url?: string | null
          category?: string
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
          venue?: string
        }
        Update: {
          body_paragraphs?: string[]
          booking_url?: string | null
          category?: string
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
          venue?: string
        }
        Relationships: []
      }
      news_articles: {
        Row: {
          body_paragraphs: string[]
          created_at: string
          date_text: string
          description: string
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          slug: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          slug?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      policy_posts: {
        Row: {
          author: string
          body_paragraphs: string[]
          created_at: string
          date_text: string
          description: string
          external_links: Json
          id: string
          image_alt: string | null
          image_url: string | null
          iso_date: string | null
          published: boolean
          pullquote_attribution: string | null
          pullquote_text: string | null
          read_minutes: number
          slug: string
          source_url: string | null
          themes: string[]
          title: string
          updated_at: string
        }
        Insert: {
          author?: string
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          external_links?: Json
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          pullquote_attribution?: string | null
          pullquote_text?: string | null
          read_minutes?: number
          slug: string
          source_url?: string | null
          themes?: string[]
          title: string
          updated_at?: string
        }
        Update: {
          author?: string
          body_paragraphs?: string[]
          created_at?: string
          date_text?: string
          description?: string
          external_links?: Json
          id?: string
          image_alt?: string | null
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          pullquote_attribution?: string | null
          pullquote_text?: string | null
          read_minutes?: number
          slug?: string
          source_url?: string | null
          themes?: string[]
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      training_courses: {
        Row: {
          created_at: string
          date_text: string
          description: string
          id: string
          image_url: string | null
          iso_date: string | null
          published: boolean
          sort_order: number
          source_url: string | null
          title: string
          updated_at: string
          venue: string
        }
        Insert: {
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          sort_order?: number
          source_url?: string | null
          title: string
          updated_at?: string
          venue?: string
        }
        Update: {
          created_at?: string
          date_text?: string
          description?: string
          id?: string
          image_url?: string | null
          iso_date?: string | null
          published?: boolean
          sort_order?: number
          source_url?: string | null
          title?: string
          updated_at?: string
          venue?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      claim_first_admin: { Args: never; Returns: boolean }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
      is_admin: { Args: { _user_id: string }; Returns: boolean }
    }
    Enums: {
      app_role: "admin" | "editor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "editor"],
    },
  },
} as const
